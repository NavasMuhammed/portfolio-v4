import { useEffect } from 'react';

type UseIntersectionObserverProps = {
    elementSelector: string;
    classes: {
        add: string;
        remove: string;
    };
    threshold: number;
};

const useIntersectionObserver = ({
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
                        console.log('Element is in the viewport!');
                    } else {
                        console.log('Element is not in the viewport.');
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

export default useIntersectionObserver;