import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'

export default function responsive() {
    const breakpoints = useBreakpoints(breakpointsTailwind)
    function isMobile() {
        return breakpoints.smaller('sm')
    }

    return {
        isMobile,
    }
}
