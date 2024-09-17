import { readFile, writeFile } from 'node:fs/promises'
import glob from 'glob'

const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const FIND_STRINGS = {
  'src="/': 'src="./',
  "src='/": "src='./",
  'src=/': 'src=./',
  'href="/': 'href="./',
  "href='/": "href='./",
  'href=/': 'href=./',
  'url("/': 'url("../',
  "url('/": "url('../",
  'url(/': 'url(../',
  'url(&quot;/': 'url(&quot;../'
}

const FIND_STRINGS_JS = {
  '"assets': '"./assets'
}

try {
  glob('dist/**/*.{html,css}', {}, async (error, files) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const file of files) {
      let fileContent = await readFile(file, 'utf8')

      Object.entries(FIND_STRINGS).forEach(([key, value]) => {
        fileContent = fileContent.replace(new RegExp(escapeRegExp(key), 'g'), value)
      })

      await writeFile(file, fileContent, 'utf8')
    }
  })

  // glob('dist/**/*.js', {}, async (error, files) => {
  //   // eslint-disable-next-line no-restricted-syntax
  //   for (const file of files) {
  //     let fileContent = await readFile(file, 'utf8')

  //     Object.entries(FIND_STRINGS_JS).forEach(([key, value]) => {
  //       fileContent = fileContent.replace(new RegExp(escapeRegExp(key), 'g'), value)
  //     })

  //     await writeFile(file, fileContent, 'utf8')
  //   }
  // })

  // eslint-disable-next-line no-console
  console.log('\x1b[32m%s\x1b[0m', 'BUILD END!')
} catch (error) {
  // eslint-disable-next-line no-console
  console.error(`Ошибка при чтении директории`)
}
