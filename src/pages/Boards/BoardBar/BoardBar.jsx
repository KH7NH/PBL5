import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Tooltip } from '@mui/material'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from '~/utils/formatters'

const MENU_STYLE = {
  color: 'white',
  bgcolor: 'transparent',
  boder: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar({ board }) {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingX: 2,
      gap: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLE}
          icon={<DashboardIcon />}
          label="Taskify Board"
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<VpnLockIcon />}
          label={capitalizeFirstLetter(board?.type)}
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >
            Invite
        </Button>
        <AvatarGroup
          max={5}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0be' }
            }
          }}
        >
          <Tooltip>
            <Avatar
              alt="HDK"
              src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/339982457_6419345908075781_6660989879778997634_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFsbe3JEvC623PwisOpL-uKFUllZmTjAlQVSWVmZOMCVIRhqassveM0R8Jqe0IiZg2Mht-ZiTw5IEIYut4JRIoc&_nc_ohc=Qt-i_0M3mZwQ7kNvgHTruzs&_nc_ht=scontent.fdad3-6.fna&oh=00_AYAVXixLopW1hIICZEvkCoY0-dWti2bLmF9c3kiorQc4WA&oe=6647A4F7"
            />
          </Tooltip>
          <Tooltip>
            <Avatar
              alt="HDK"
              src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/339982457_6419345908075781_6660989879778997634_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFsbe3JEvC623PwisOpL-uKFUllZmTjAlQVSWVmZOMCVIRhqassveM0R8Jqe0IiZg2Mht-ZiTw5IEIYut4JRIoc&_nc_ohc=Qt-i_0M3mZwQ7kNvgHTruzs&_nc_ht=scontent.fdad3-6.fna&oh=00_AYAVXixLopW1hIICZEvkCoY0-dWti2bLmF9c3kiorQc4WA&oe=6647A4F7"
            />
          </Tooltip>
          <Tooltip>
            <Avatar
              alt="HDK"
              src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/339982457_6419345908075781_6660989879778997634_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFsbe3JEvC623PwisOpL-uKFUllZmTjAlQVSWVmZOMCVIRhqassveM0R8Jqe0IiZg2Mht-ZiTw5IEIYut4JRIoc&_nc_ohc=Qt-i_0M3mZwQ7kNvgHTruzs&_nc_ht=scontent.fdad3-6.fna&oh=00_AYAVXixLopW1hIICZEvkCoY0-dWti2bLmF9c3kiorQc4WA&oe=6647A4F7"
            />
          </Tooltip>
          <Tooltip>
            <Avatar
              alt="HDK"
              src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/339982457_6419345908075781_6660989879778997634_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFsbe3JEvC623PwisOpL-uKFUllZmTjAlQVSWVmZOMCVIRhqassveM0R8Jqe0IiZg2Mht-ZiTw5IEIYut4JRIoc&_nc_ohc=Qt-i_0M3mZwQ7kNvgHTruzs&_nc_ht=scontent.fdad3-6.fna&oh=00_AYAVXixLopW1hIICZEvkCoY0-dWti2bLmF9c3kiorQc4WA&oe=6647A4F7"
            />
          </Tooltip>
          <Tooltip>
            <Avatar
              alt="HDK"
              src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/339982457_6419345908075781_6660989879778997634_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFsbe3JEvC623PwisOpL-uKFUllZmTjAlQVSWVmZOMCVIRhqassveM0R8Jqe0IiZg2Mht-ZiTw5IEIYut4JRIoc&_nc_ohc=Qt-i_0M3mZwQ7kNvgHTruzs&_nc_ht=scontent.fdad3-6.fna&oh=00_AYAVXixLopW1hIICZEvkCoY0-dWti2bLmF9c3kiorQc4WA&oe=6647A4F7"
            />
          </Tooltip>
          <Tooltip>
            <Avatar
              alt="HDK"
              src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/339982457_6419345908075781_6660989879778997634_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFsbe3JEvC623PwisOpL-uKFUllZmTjAlQVSWVmZOMCVIRhqassveM0R8Jqe0IiZg2Mht-ZiTw5IEIYut4JRIoc&_nc_ohc=Qt-i_0M3mZwQ7kNvgHTruzs&_nc_ht=scontent.fdad3-6.fna&oh=00_AYAVXixLopW1hIICZEvkCoY0-dWti2bLmF9c3kiorQc4WA&oe=6647A4F7"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}
export default BoardBar