import { defineConfig, defineDocs } from 'fumadocs-mdx/config';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections
export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: pageSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      themes: {
        light: 'vitesse-light',
        dark: 'vitesse-dark',
      },
      langs: [
        {
          name: 'gta3script',
          displayName: 'GTA3Script',
          aliases: ['sc', 'gta3'],
          scopeName: 'source.gta3script',
          patterns: [
            {
              match: '(//).*$\n?',
              name: 'comment.line.double-slash.gta3script',
            },
            {
              begin: '/\\*',
              end: '\\*/',
              name: 'comment.block.gta3script',
            },
            {
              begin: '"',
              end: '"',
              name: 'string.quoted.double.gta3script',
            },
            {
              match: '\\b((0x[0-9A-Fa-f\\-]+)|([0-9\\-]+)|([0-9\\.fF]+))\\b',
              name: 'constant.numeric.gta3script',
            },
            {
              match: '^\\s*\\S+:',
              name: 'entity.name.function.gta3script',
            },
            {
              match: '(?i:^\\s*\\bL?VAR_(INT|FLOAT|TEXT_LABEL|TEXT_LABEL16)\\b)',
              name: 'storage.type.gta3script',
            },
            {
              match:
                '(?i:^\\s*\\b(MISSION_START|MISSION_END|SCRIPT_START|SCRIPT_END)\\b)',
              name: 'keyword.control.gta3script',
            },
            {
              match:
                '(?i:^\\s*\\b(ELSE|ENDIF|ENDWHILE|REPEAT|ENDREPEAT|SWITCH|CASE|DEFAULT|BREAK|ENDSWITCH)\\b)',
              name: 'keyword.other.contro.gta3script',
            },
            {
              match: '(?i:^\\s*\\b(WHILE|WHILENOT|IF|IFNOT)\\b\\s*$)',
              name: 'keyword.other.contro.gta3script',
            },
            {
              match: '(?i:^\\s*\\b(NOT|AND|OR)\\b\\s*$)',
              name: 'keyword.other.operato.andornot.gta3script',
            },
            {
              match:
                '^\\s*(?i:((?:IF\\s+)|(?:WHILE\\s+))?((?:AND\\s+)|(?:OR\\s+))?(NOT\\s+)?)((?>[^\\s{}<=>\\+\\-\\*\\/]+))(?!\\s*[<=>\\+\\-\\*\\/])',
              captures: {
                '1': {
                  name: 'keyword.other.contro.gta3script',
                },
                '2': {
                  name: 'keyword.other.operato.andornot.gta3script',
                },
                '3': {
                  name: 'keyword.other.operato.andornot.gta3script',
                },
                '4': {
                  name: 'keyword.other.command.gta3script',
                },
              },
            },
            {
              match: '\\b[A-Z]\\S*\\b',
              name: 'constant.language.gta3script',
            },
          ],
        } as any,
      ],
    },
  },
});
