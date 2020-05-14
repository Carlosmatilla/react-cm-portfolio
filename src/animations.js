export const downStagger = {
    initial: {
        opacity: 0,
        y: "-100vw",
    },
    in: {
        opacity: 1,
        y: 0,
        transition: {
            
            staggerChildren: 0.6,
            delayChildren: 0.8
        }
    },
    out: {
        opacity: 0,
        y: "100vw",
    }
}
export const down = {
    initial: {
        opacity: 0,
        y: "-50%",
    },
    in: {
        opacity: 1,
        y: 0
    },
    out: {
        opacity: 0,
        y: "50%",
    }
}

export const up = {
    initial: {
        opacity: 0,
        y: "50%",
    },
    in: {
        opacity: 1,
        y: 0
    },
    out: {
        opacity: 0,
        y: "-50%",
    }
}

export const left = {
    initial: {
        opacity: 0,
        x: "100vw",
    },
    in: {
        opacity: 1,
        x: 0
    },
    out: {
        opacity: 0,
        x: "-100vw",
    }
}

export const right = {
    initial: {
        opacity: 0,
        x: "-100vw",
    },
    in: {
        opacity: 1,
        x: 0
    },
    out: {
        opacity: 0,
        x: "100vw",
    }
}

export const tweenTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.6
}