import App from './App.svelte'
import './style.css'
import './components/prismjs.css'

new App({ target: document.body, hydrate: import.meta.env.ROUTIFY_SSR_ENABLE })

const _warn = console.warn

console.warn = (msg, ...params) => {
    const msgs = ["unknown prop 'context'", 'unexpected slot "default"'].join('|')

    if (!msg.match(msgs)) {
        const log = new Error()
        _warn.bind(console)(
            'Error (not really an error) ' + msg + '\n' + log.stack.split('\n')[2],
        )
    }
}
