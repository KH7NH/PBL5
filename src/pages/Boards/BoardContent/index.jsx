import Box from '@mui/material/Box'
function BoardContent() {
  return (
    <Box sx={{
      backgroundColor: 'primary.main',
      width: '100%',
      height: 'calc(100vh - 48px - 58px)',
      display: 'flex',
      alignItems: 'center'
    }}>
      Board content
    </Box>
  )
}
export default BoardContent