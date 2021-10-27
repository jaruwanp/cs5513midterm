import DemoPageLinks from '../../components/DemoPageLinks'
import React from 'react'

const styles = {
  content: {
    padding: 32,
  },
  infoTextContainer: {
    marginBottom: 32,
  },
}
const Demo = () => {
  
  return (
    <div style={styles.content}>
        <div style={styles.infoTextContainer}>
        <DemoPageLinks />
        </div>
    </div>
  )
}
export default (Demo)