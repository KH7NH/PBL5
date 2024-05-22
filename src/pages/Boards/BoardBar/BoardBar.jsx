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
        <Tooltip title={board?.description}>
          <Chip
            sx={MENU_STYLE}
            icon={<DashboardIcon />}
            label={capitalizeFirstLetter(board?.title)}
            clickable
          />
        </Tooltip>
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
              src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/312519442_1409659872894386_4471710217397451945_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGl3GdMA31Hp7Q296I7uZNqSv-e6k6PB21K_57qTo8HbUCGJZDKpioCsZiIIzdP4edYejL11BsI7vwMAShffglK&_nc_ohc=HLIACUVAoEwQ7kNvgFGgC08&_nc_ht=scontent.fhan14-5.fna&oh=00_AYA_xtQi4F7ligL1zLKdXzrmzE1QZorNG06sD3QlEW08nQ&oe=6650E926"
            />
          </Tooltip>
          <Tooltip>
            <Avatar
              alt="HDK"
              src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/316182012_874147000535608_58277376270294942_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG-Y4Bj_4JbBbM8r2IlfnE5WOLS9t-s0RBY4tL236zRED4abhm1mBbsq04NoZDsBfvbD8PO-ecLhF3xx6ifVCOy&_nc_ohc=vO0-MXBTKKcQ7kNvgH7iX-Q&_nc_ht=scontent.fhan14-5.fna&oh=00_AYDN6CUmD73Q4mAFozcxIoUdj_TxTjdh1fzaSo3Ptve3UA&oe=6650C6C3"
            />
          </Tooltip>
          <Tooltip>
            <Avatar
              alt="HDK"
              src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/427980948_1428978027696477_777415906751007243_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGcRbJiYfNdp7vo8XZYNe8i91nLuPcs8Dn3Wcu49yzwOdY2vDIMMwYgyRgFP5_WJYWhLzu1ToWWV1F9vwk2K9IF&_nc_ohc=clN16hWlPKIQ7kNvgEoCNkG&_nc_ht=scontent.fhan14-2.fna&oh=00_AYB2JRr27Yc2cwe-3-uy_Z18D_UcjsfS2nfJJ__DX53Gsg&oe=6650E299"
            />
          </Tooltip>
          <Tooltip>
            <Avatar
              alt="HDK"
              src="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/80349034_2507365986250228_1877126511962619904_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGU0o9paCTx8RLv_eZ7uqgJ0gDircSxhSDSAOKtxLGFIATrbx72AB6rcVbDIhsTrTWKjEdsqxSYn_KiPk1_rmT8&_nc_ohc=0OLGs9DsDywQ7kNvgHZownE&_nc_ht=scontent.fhan14-3.fna&oh=00_AYABr3wHyOmi8oFZgzeHkCGbXMJW9qJy6MMtmeAEwIhQrg&oe=66729674"
            />
          </Tooltip>
          <Tooltip>
            <Avatar
              alt="HDK"
              src="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/248499996_1382583968822887_6896342169248179669_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFFxFCYTa6kva38ln_HbwZTa3tD1UI0G51re0PVQjQbnbyM0xiQwfKg1MxqZzpPY4W3wy2CdNJACuf1sEXcDrB1&_nc_ohc=t4xWTBnf0zYQ7kNvgGQuIXr&_nc_ht=scontent.fhan14-4.fna&oh=00_AYA6Pk9rPI9mEYL7Im5AWYPLSDrjo4CODYlX02h876EguA&oe=6650CB21"
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