import {useEffect, useState} from 'react'
import {Scrollbars} from 'react-custom-scrollbars'
import {Input} from 'baseui/input'
import Icons from '@components/icons'
import {useEditor} from '@scenify/sdk'

function Templates() {
    const editor = useEditor()
    const templates = [
        {
            "name": "Untitled design",
            "objects": [],
            "background": {
                "type": "color",
                "value": "white"
            },
            "frame": {
                "width": 1280,
                "height": 1280
            },
            "preview": "https://www.comkey.net/wp-content/uploads/2021/09/logo-Comkey-gris.png",
            "id": "1"
        },
    ]



    useEffect(() => {
        const templateElement = document.getElementById('template-1')
        document.addEventListener("DOMContentLoaded", function() {
            templateElement.click()
        });
    }, [])

    const [value, setValue] = useState('')
    return (
        <div style={{display: 'flex', height: '100%', flexDirection: 'column'}}>
            <div style={{padding: '2rem 2rem'}}>
            </div>
            <div style={{flex: 1}}>
                <Scrollbars>
                    <div
                        style={{display: 'grid', gap: '0.5rem', padding: '0 2rem 2rem', gridTemplateColumns: '1fr 1fr'}}
                    >
                        {templates.map(template => (
                            <div
                                key={template.id}
                                style={{
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    border: '1px solid rgba(0,0,0,0.2)',
                                    padding: '5px',
                                }}
                                onClick={() => editor.importFromJSON(template)}
                            >
                                <img id={"template-" + template.id} width="100%" src={template.preview || 'https://via.placeholder.com/150'}
                                     alt="preview"/>
                            </div>
                        ))}
                    </div>
                </Scrollbars>
            </div>
        </div>
    )
}

export default Templates
