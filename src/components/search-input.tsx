import { jsx } from '@emotion/core'
import { icons } from 'feather-icons'
import loadIcons from '../icons'
import theme from '../theme'

const ICON_COUNT = Object.keys(icons).length

const SEARCH_ICON = <svg
  viewBox="0 0 32 32"
  width={32}
  height={32}
  clipRule="evenodd"
  fillRule="evenodd"
  fill='#333'
>
  <path d="m20 15c0 2.7614-2.2386 5-5 5s-5-2.2386-5-5 2.2386-5 5-5 5 2.2386 5 5zm-1.1256 4.5815c-1.0453.8849-2.3975 1.4185-3.8744 1.4185-3.3137 0-6-2.6863-6-6s2.6863-6 6-6 6 2.6863 6 6c0 1.4769-.5336 2.8291-1.4185 3.8744l4.2721 4.272-.7072.7072z" />
</svg>

interface SearchInputProps extends React.HTMLProps<HTMLDivElement> {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function SearchInput({ value, onChange, ...props }: SearchInputProps) {
  let icons_count = loadIcons().length;

  return (
    <div css={{ position: 'relative' }} {...props}>
      <div
        css={{
          position: 'absolute',
          top: 0,
          left: 0,
          padding: theme.space[1],
        }}
      >
        <div>{SEARCH_ICON}</div>
      </div>
      <input
        autoFocus
        type="search"
        value={value}
        onChange={onChange}
        placeholder={`Search ${icons_count} icons`}
        css={{
          width: '100%',
          height: 40,
          padding: `0 ${theme.space[4]} 0 36px`,
          fontFamily: 'inherit',
          fontSize: theme.fontSizes[0],
          border: 0,
          outline: 0,
        }}
      />
    </div >
  )
}

export default SearchInput
