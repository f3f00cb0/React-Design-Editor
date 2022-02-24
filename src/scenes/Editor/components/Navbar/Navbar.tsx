import { styled, ThemeProvider, DarkTheme } from 'baseui'
import { Button, KIND } from 'baseui/button'
import Logo from '@components/icons/Logo'
import { useEditor } from '@scenify/sdk'
import Resize from './components/Resize'
import History from './components/History'

const Container = styled('div', props => ({
  height: '70px',
  background: props.$theme.colors.background,
  display: 'flex',
  padding: '0 2rem',
  justifyContent: 'space-between',
  alignItems: 'center',
}))

const LogoContainer = styled('div', props => ({
  color: props.$theme.colors.primary,
  display: 'flex',
  alignItems: 'center',
}))

function NavbarEditor() {
  const editor = useEditor()
  const downloadImage = async () => {
    if (editor) {
      const data = await editor.toPNG({})
      if (data) {
        const a = document.createElement('a')
        a.href = data
        a.download = 'drawing.png'
        a.click()
      }
    }
  }

  return (
    <ThemeProvider theme={DarkTheme}>
      <Container>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <LogoContainer>
            <Logo size={40} />
          </LogoContainer>
          <Resize />
          <History />
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button onClick={downloadImage} kind={KIND.primary}>
            Télécharger
          </Button>
        </div>
      </Container>
    </ThemeProvider>
  )
}

export default NavbarEditor
