## react + babel
> react与babel不兼容，所需要@babel/preset-react单独配置
在`.babelrc`文件中配置
```json
{
  "presets": ["@babel/preset-react"]
}
```
### 执行多命令（concurrently）
```bash
yarn add concurrently -D
```
