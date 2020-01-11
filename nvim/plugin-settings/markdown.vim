let g:vim_markdown_folding_disabled = 1
let g:vim_markdown_toc_autofit = 1
set conceallevel=2
set concealcursor=nc
let g:vim_markdown_conceal_code_blocks = 0

let g:mkdx#settings = { 'map': { 'prefix': '<leader>' } }

autocmd FileType markdown map <leader>t :Toc<CR>

