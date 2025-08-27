import styles from './styles.module.css'

import Lottie from 'lottie-react'
import loading from '../../assets/lottie/loading.json'

export const Loading = ({ enable, type = 'default', progress = 0 }) => {
  if (!enable) return null

  const CircularProgress = () => (
    <div className={styles.circularProgress}>
      <svg className={styles.progressRing} viewBox="0 0 120 120">
        <defs>
          <linearGradient
            id="progressGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" style={{ stopColor: '#903be1' }} />
            <stop offset="100%" style={{ stopColor: '#c738f6' }} />
          </linearGradient>
        </defs>
        <circle
          className={styles.progressRingCircle}
          cx="60"
          cy="60"
          r="50"
          fill="transparent"
          stroke="#ddd"
          strokeWidth="12"
        />
        <circle
          className={styles.progressRingCircleFill}
          cx="60"
          cy="60"
          r="50"
          fill="transparent"
          stroke="url(#progressGradient)"
          strokeWidth="12"
          strokeDasharray={`${(2 * Math.PI * 50 * progress) / 100} ${
            2 * Math.PI * 50
          }`}
          transform="rotate(-90 60 60)"
          strokeLinecap="round"
        />
      </svg>
      <span className={styles.progressText}>{Math.round(progress)}%</span>
    </div>
  )

  return (
    <div className={styles.content}>
      <div className={styles.content_overlay}>
        {type === 'default' ? (
          <Lottie animationData={loading} style={{ width: 200 }} />
        ) : (
          <CircularProgress />
        )}
      </div>
    </div>
  )
}

export default Loading
