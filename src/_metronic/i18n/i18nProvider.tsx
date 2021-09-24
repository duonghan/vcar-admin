import {FC} from 'react'
import {useLang} from './Metronici18n'
import {IntlProvider} from 'react-intl'
import '@formatjs/intl-relativetimeformat/polyfill'
import '@formatjs/intl-relativetimeformat/locale-data/vi'
import '@formatjs/intl-relativetimeformat/locale-data/en'

import viMessages from './messages/vi.json'
import enMessages from './messages/en.json'

const allMessages = {
  vi: viMessages,
  en: enMessages,
}

const I18nProvider: FC = ({children}) => {
  const locale = useLang()
  const messages = allMessages[locale]

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  )
}

export {I18nProvider}
