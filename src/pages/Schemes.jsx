import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiAward, FiDownload, FiLock, FiCheckCircle, FiStar } from 'react-icons/fi'
import api from '../app'
import Swal from 'sweetalert2'

const Schemes = () => {
  const [schemes, setSchemes] = useState([])
  const [userPoints, setUserPoints] = useState(0)
  const [loading, setLoading] = useState(true)
  const [downloading, setDownloading] = useState(null)

  useEffect(() => {
    fetchSchemes()
  }, [])

  const fetchSchemes = async () => {
    try {
      const res = await api.get('/api/schemes/eligible')
      setSchemes(res.data.schemes)
      setUserPoints(res.data.userPoints)
    } catch (error) {
      console.error('Error fetching schemes:', error)
    } finally {
      setLoading(false)
    }
  }

  const downloadCertificate = async (scheme) => {
    setDownloading(scheme._id)
    try {
      const res = await api.get(`/api/schemes/${scheme._id}/certificate`, {
        responseType: 'blob'
      })
      const url = window.URL.createObjectURL(new Blob([res.data], { type: 'application/pdf' }))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', `${scheme.name}-certificate.pdf`)
      document.body.appendChild(link)
      link.click()
      link.remove()
      window.URL.revokeObjectURL(url)
      Swal.fire({
        icon: 'success',
        title: 'Certificate Downloaded!',
        text: `Your certificate for "${scheme.name}" has been downloaded.`,
        timer: 3000,
        showConfirmButton: false
      })
    } catch (error) {
      Swal.fire({ icon: 'error', title: 'Download Failed', text: 'Could not generate certificate.' })
    } finally {
      setDownloading(null)
    }
  }

  const eligibleCount = schemes.filter(s => s.eligible).length

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold gradient-text mb-2">Government Schemes 🏛️</h1>
          <p className="text-secondary-600 text-lg">Schemes you are eligible for based on your green credits</p>
        </motion.div>

        {/* Points summary card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card mb-8 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <FiStar className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-secondary-600 text-sm">Your Green Credits</p>
                <p className="text-4xl font-bold text-green-600">{userPoints}</p>
              </div>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-secondary-600 text-sm">Eligible Schemes</p>
              <p className="text-4xl font-bold text-emerald-600">{eligibleCount} / {schemes.length}</p>
            </div>
          </div>
        </motion.div>

        {schemes.length === 0 ? (
          <div className="card text-center py-12">
            <FiAward className="w-16 h-16 text-secondary-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-secondary-900 mb-2">No schemes available</h3>
            <p className="text-secondary-600">Check back later for government schemes.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {schemes.map((scheme, index) => (
              <motion.div
                key={scheme._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`card border-2 transition-all duration-300 ${
                  scheme.eligible
                    ? 'border-green-300 hover:shadow-xl hover:border-green-400'
                    : 'border-secondary-200 opacity-75'
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      scheme.eligible ? 'bg-green-100' : 'bg-secondary-100'
                    }`}>
                      {scheme.eligible
                        ? <FiCheckCircle className="w-6 h-6 text-green-600" />
                        : <FiLock className="w-6 h-6 text-secondary-400" />
                      }
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-secondary-900">{scheme.name}</h3>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        scheme.eligible
                          ? 'bg-green-100 text-green-700'
                          : 'bg-secondary-100 text-secondary-500'
                      }`}>
                        {scheme.eligible ? '✅ Eligible' : '🔒 Not Eligible Yet'}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-secondary-500">Min. Points</p>
                    <p className="text-xl font-bold text-green-600">{scheme.minPoints}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-secondary-700 text-sm mb-3">{scheme.description}</p>

                {/* Benefits */}
                <div className="bg-green-50 rounded-lg p-3 mb-4">
                  <p className="text-xs font-semibold text-green-700 mb-1">Benefits</p>
                  <p className="text-sm text-green-800">{scheme.benefits}</p>
                </div>

                {/* Progress bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-secondary-500 mb-1">
                    <span>Your points: {userPoints}</span>
                    <span>Required: {scheme.minPoints}</span>
                  </div>
                  <div className="w-full bg-secondary-100 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${
                        scheme.eligible ? 'bg-green-500' : 'bg-yellow-400'
                      }`}
                      style={{ width: `${Math.min((userPoints / scheme.minPoints) * 100, 100)}%` }}
                    />
                  </div>
                  {!scheme.eligible && (
                    <p className="text-xs text-secondary-500 mt-1">
                      {scheme.minPoints - userPoints} more points needed
                    </p>
                  )}
                </div>

                {/* Download button */}
                {scheme.eligible ? (
                  <button
                    onClick={() => downloadCertificate(scheme)}
                    disabled={downloading === scheme._id}
                    className="w-full flex items-center justify-center space-x-2 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {downloading === scheme._id ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                        <span>Generating...</span>
                      </>
                    ) : (
                      <>
                        <FiDownload className="w-4 h-4" />
                        <span>Download Certificate</span>
                      </>
                    )}
                  </button>
                ) : (
                  <div className="w-full flex items-center justify-center space-x-2 py-3 bg-secondary-100 text-secondary-400 rounded-xl font-medium cursor-not-allowed">
                    <FiLock className="w-4 h-4" />
                    <span>Earn {scheme.minPoints - userPoints} more points to unlock</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Schemes
