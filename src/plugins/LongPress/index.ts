import {
  useCallback,
  useRef,
  useState,
} from 'react';



const LongPress = (
  onLongPress: any,
  onPress: any,
  { shouldPreventDefault = true, delay = 300 } = {},
) => {
  const [longPressTriggered, setLongPressTriggered] = useState(false);
  const timeout = useRef<any>();
  const target = useRef<any>();

  const start = useCallback(
    (event) => {
      if (shouldPreventDefault && event.target) {
        event.target.addEventListener('touchend', preventDefault, {
          passive: false,
        });
        target.current = event.target;
      }
      timeout.current = setTimeout(() => {
        onLongPress(event);
        setLongPressTriggered(true);
      }, delay);
    },
    [onLongPress, delay, shouldPreventDefault],
  );

  const clear = useCallback(
    (_event, shouldTriggerClick = true) => {
      timeout.current && clearTimeout(timeout.current);
      shouldTriggerClick && !longPressTriggered && onPress();
      setLongPressTriggered(false);
      if (shouldPreventDefault && target.current) {
        target.current.removeEventListener('touchend', preventDefault);
      }
    },
    [shouldPreventDefault, onPress, longPressTriggered],
  );

  return {
    onMouseDown: (event: any) => start(event),
    onTouchStart: (event: any) => start(event),
    onMouseUp: (event: any) => clear(event),
    onMouseLeave: (event: any) => clear(event, false),
    onTouchEnd: (event: any) => clear(event),
  };
};



const isTouchEvent = (event: any) => {
  return 'touches' in event;
};



const preventDefault = (event: any) => {
  if (!isTouchEvent(event)) return;

  if (event.touches.length < 2 && event.preventDefault) {
    event.preventDefault();
  }
};



export default LongPress;
