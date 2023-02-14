import { GzInput } from '@gz-ui/components/Input/index'
import { GzButton } from '@gz-ui/components/Button'
import { GzAlert } from '@gz-ui/components/Alert'
import { GzCheckBoxGroup, GzCheckBox } from '@gz-ui/components/CheckBox'
import { GzTag } from '@gz-ui/components/Tag'
import { GzBadge } from '@gz-ui/components/Badge'
import { GzOption,GzSelect } from '@gz-ui/components/Select'
import { GzTabPane,GzTabs } from '@gz-ui/components/Tabs'

import './index.css'


import type { App } from 'vue'


const Installer = {
  install(app: App) {
    [GzButton, GzCheckBoxGroup, GzCheckBox, GzInput,GzTag,GzOption,GzSelect,GzTabPane,GzTabs,GzBadge,GzAlert].forEach((c) => {
      app.use(c)
    })
  }
}

export default Installer
export {
  GzButton
}
