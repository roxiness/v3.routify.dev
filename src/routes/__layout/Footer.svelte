<script>
    import Icon from '#cmp/Icon.svelte'
    import { isActive } from '@roxi/routify'
</script>

<footer>
    <strong> Need a developer? </strong>
    Hire me!
    <a href="mailto:jakobrosenberg@gmail.com" class="icon">
        <Icon name="IconEmail" />
    </a>
    <a href="https://www.linkedin.com/in/jakob-rosenberg/" class="icon" target="_blank">
        <Icon name="IconLinkedin" />
    </a>
    <a href="https://discord.com/users/402846333087776768" class="icon" target="_blank">
        <Icon name="IconDiscord" />
    </a>
</footer>

<style>
    footer {
        padding-block: 32px 16px;
        text-align: center;
        background: #f8f8f8;
        border-top: 1px solid #e0e0e0;
        display: flex;
        justify-content: center;        
        gap: 4px;     
    }
    .icon {
        opacity: 0.5;
        padding-left: 4px;
    }
    
</style>
