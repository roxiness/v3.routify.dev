<script>
    import { activeRoute } from '@roxi/routify'
</script>

<div class="author">
    <img class="author__img" src={$activeRoute.leaf.node.meta._author_img} alt="" />
    <div>
        <h3 class="author__name">{$activeRoute.leaf.node.meta._author}</h3>
        <p>{$activeRoute.leaf.node.meta._author_description}</p>
        <ul class="author__links">
            <li>
                <a href={$activeRoute.leaf.node.meta._author_github}
                    ><div class="link__icon">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                                <path
                                    d="M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 0.999999C19.91 0.999999 18.73 0.649999 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.649999 5.09 0.999999 5.09 0.999999C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22M9 19C4 20.5 4 16.5 2 16L9 19Z"
                                    stroke="black"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <path d="M0 0H24V24H0V0Z" fill="white"></path>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    Github</a>
            </li>
            <li>
                <a href={$activeRoute.leaf.node.meta._author_twitter}
                    ><div class="link__icon">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z"
                                stroke="black"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"></path>
                        </svg>
                    </div>
                    Twitter</a>
            </li>
        </ul>
    </div>
</div>

<style>
    
    /* posts */
    .author {
        display: flex;
        background: #f3f6fa;
        padding: 2.4rem;
        margin: 3.2rem 0 0 0;
    }
    .author__img {
        width: 7.2rem;
        height: 7.2rem;
        border-radius: 50%;
        margin-right: 1rem;

        margin-right: 2.4rem;
        /* flex: 0 0 auto; */
    }
    .author__name {
        margin: 0 0 1.2rem;
        font-size: 1.8rem;
        font-weight: 600;
        letter-spacing: 0px;
    }
    .author p {
        margin-bottom: 1.6rem;
    }
    .author__links {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
        & a {
            display: flex;
            align-items: center;
            margin-right: 1rem;
            color: var(--color-primary);
            text-decoration: none;
            vertical-align: auto;
            /* font-size: 60px; */
        }
        & li {
            margin: 0;
        }
    }
    .link__icon {
        opacity: 0.5;
        position: relative;
        top: 0.3rem;
        margin-right: 0.4rem;
    }
</style>