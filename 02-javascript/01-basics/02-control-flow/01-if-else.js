let userRole = 'editor'
userRole = 'viewer'

const isEditor = userRole === 'editor'
const isViewer = userRole === 'viewer'
console.log('does user has \'editor\' role?\n' + isEditor)

if (isEditor) {
    console.log('you\'r allowed to edit.')
} else if (isViewer) {
    console.log('you\'r allowed to view.')
} else {
    console.log('you\'r not alloed to edit.')
}