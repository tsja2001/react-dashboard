import { changeTheme } from '@/store/features/global'
import { memo, useState } from 'react'
import { connect } from 'react-redux'
import { animated, useSpring, useTransition } from 'react-spring'

const config = { mass: 3, tension: 200, friction: 30 }
const starPaths = [
  'M25 10L31.7523 28.2477L50 35L31.7523 41.7523L25 60L18.2477 41.7523L0 35L18.2477 28.2477L25 10Z',
  'M71.5 42L76.2266 54.7734L89 59.5L76.2266 64.2266L71.5 77L66.7734 64.2266L54 59.5L66.7734 54.7734L71.5 42Z',
  'M61 0L63.7009 7.29909L71 10L63.7009 12.7009L61 20L58.2991 12.7009L51 10L58.2991 7.29909L61 0Z'
]

function DarkModeToggle(props) {
  const isDarkMode = props.theme === 'dark'
  const changeDarkMode = () => {
    props.setTheme(isDarkMode ? 'light' : 'dark')
  }

  const starPathTransitions = useTransition(isDarkMode ? starPaths : [], {
    from: { scale: 0, rotate: -30, opacity: 0 },
    enter: { scale: 1, rotate: 0, opacity: 1 },
    leave: { scale: 0, rotate: -30, opacity: 0 },
    trail: 150
  })

  const cloudStyles = useSpring({
    opacity: isDarkMode ? 0 : 1,
    x: isDarkMode ? -5 : 0,
    config
  })

  const nodeStyles = useSpring({
    x: isDarkMode ? 28 : 0,
    rotate: isDarkMode ? 0 : 180,
    backgroundColor: isDarkMode ? '#c6d0d1' : '#fde047',
    config
  })

  const containerStyles = useSpring({
    // backgroundColor: isDarkMode ? '#475569' : '#7dd3fc',
    backgroundColor: isDarkMode ? '#475569' : '#598bff',
    config
  })

  const craterStyles = useSpring({
    opacity: isDarkMode ? 1 : 0,
    config
  })

  const starts = (
    <svg
      className="absolute left-[8px] top-[7px]"
      width="16"
      height="14"
      viewBox="0 0 89 77"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {starPathTransitions((styles, path) => (
        // 注意 style 这里 transformBox 不要省略，否则即使你设置了 transformOrigin 为 center，这个 path 也不能按照中心点运动
        <animated.path
          key={path}
          style={{
            ...styles,
            transformBox: 'fill-box',
            transformOrigin: 'center'
          }}
          d={path}
          fill="#C6D0D1"
        />
      ))}
    </svg>
  )

  const clouds = (
    <animated.svg
      style={cloudStyles}
      className="absolute right-[10px] top-[10px]"
      width="15"
      height="8"
      viewBox="0 0 104 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.0258 11.2704C18.0258 5.34458 22.8296 0.540771 28.7554 0.540771H93.1331C99.0589 0.540771 103.863 5.34458 103.863 11.2704C103.863 17.1962 99.0589 22 93.1331 22H66.2146C63.3038 22 60.9442 24.3596 60.9442 27.2704V27.2704C60.9442 30.1811 63.3038 32.5408 66.2146 32.5408H75.1073C81.0331 32.5408 85.8369 37.3446 85.8369 43.2704C85.8369 49.1962 81.0331 54 75.1073 54H10.7296C4.80381 54 0 49.1962 0 43.2704C0 37.3446 4.80381 32.5408 10.7296 32.5408H44.7296C47.6404 32.5408 50 30.1811 50 27.2704V27.2704C50 24.3596 47.6404 22 44.7296 22H28.7554C22.8296 22 18.0258 17.1962 18.0258 11.2704Z"
        fill="white"
      />
    </animated.svg>
  )

  return (
    <animated.div
      style={containerStyles}
      className="relative w-[56px] h-[28px] rounded-full p-[5px] cursor-pointer"
      onClick={() => changeDarkMode(isDarkMode ? false : true)}
    >
      {starts}
      {clouds}
      <animated.div
        style={nodeStyles}
        className="relative w-[18px] h-[18px] rounded-full z-10"
      >
        <animated.div style={craterStyles} className="relative w-full h-full">
          <div className="absolute top-[6px] left-[4px] w-[4px] h-[4px] rounded-full bg-slate-400/50 shadow-inner" />
          <div className="absolute top-[8px] left-[11px] w-[1px] h-[1px] rounded-full bg-slate-400/50 shadow-inner" />
          <div className="absolute top-[11px] left-[9px] w-[2px] h-[2px] rounded-full bg-slate-400/50 shadow-inner" />
        </animated.div>
      </animated.div>
    </animated.div>
  )
}

const mapStateToProps = (state) => ({
  theme: state.global.theme
})
const mapDispatchToProps = (dispatch) => ({
  setTheme: (theme) => dispatch(changeTheme(theme))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(DarkModeToggle))
