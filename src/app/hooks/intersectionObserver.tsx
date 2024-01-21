import { useEffect } from 'react';

type UseIntersectionObserverProps = {
    elementSelector: string;
    classes: {
        add: string;
        remove: string;
    };
    threshold: number;
};

export const useIntersectionObserver = ({
    elementSelector,
    classes,
    threshold,
}: UseIntersectionObserverProps) => {
    useEffect(() => {
        let elements: NodeListOf<HTMLElement> = document.querySelectorAll(elementSelector);

        let observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(classes.add);
                        entry.target.classList.remove(classes.remove);
                    }
                });
            },
            {
                rootMargin: '0px',
                threshold: threshold,
            }
        );

        elements.forEach(element => {
            observer.observe(element);
        });
    }, [elementSelector, classes.add, classes.remove, threshold]);
};
