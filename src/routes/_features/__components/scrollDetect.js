import { derived, writable } from 'svelte/store'

export const checkOverflow = element => {
    console.log('check it', element)
    return {
        top: element.scrollTop > 0,
        bottom: element.scrollHeight - 1 > element.clientHeight + element.scrollTop,
        left: element.scrollLeft > 0,
        right: element.scrollWidth - 1 > element.clientWidth + element.scrollLeft,
    }
}

/**
 * @template {HTMLElement} T
 * @param {T} element
 * @param {(overflow: ReturnType<checkOverflow>)=>void} callback
 * @returns {()=>void} unsub
 */
export const watchOverflow = (element, callback) => {    
    const check = () => callback(checkOverflow(element))
    element.addEventListener('scroll', check)
    window.addEventListener('resize', check)
    console.log('watch', element)
    check()
    return () => {
        console.log('unsubbing')
        element.removeEventListener('scroll', check)
        window.removeEventListener('resize', check)
    }
}

const defaults = {
    prefix: 'overflow',
}

export const createOverflowWatcher = options => {
    options = { ...defaults, ...options }
    const overflow = writable({ top: false, bottom: false, left: false, right: false })
    const classStr = derived(overflow, ({ top, bottom, left, right }) => {
        const arr = Object.entries({ top, bottom, left, right }).map(([key, value]) =>
            value ? `${options.prefix}-${key}` : '',
        )
        return arr.filter(Boolean).join(' ')
    })
    let unsub
    // let unsub
    const watch = {
        subscribe: run => {
            run(elem => {
                unsub = watchOverflow(elem, _overflow => {
                    overflow.set(_overflow)
                })
            })
            return () => unsub()
        },
    }
    return {
        overflow,
        classStr,
        watch,
    }
}

const createPseudoStore = () => {}
