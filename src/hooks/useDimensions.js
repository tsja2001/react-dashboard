import { useState, useEffect } from 'react';

function useDimensions(ref) {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateDimensions = () => {
            setDimensions({
                width: ref.current.offsetWidth,
                height: ref.current.offsetHeight
            });
        };

        // 当元素首次挂载时，获取其尺寸
        updateDimensions();
        
        // 添加一个事件监听器，以便在窗口尺寸改变时更新元素的尺寸
        window.addEventListener('resize', updateDimensions);

        // 在组件卸载时移除事件监听器
        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, [ref]);

    return dimensions;
}

export default useDimensions;
