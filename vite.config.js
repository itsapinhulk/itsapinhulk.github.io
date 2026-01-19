import { defineConfig } from "vite"
import { viteSingleFile } from "vite-plugin-singlefile"

export default defineConfig({
	plugins: [viteSingleFile()],
	define: {
		__BUILD_TIME__: JSON.stringify(Date.now()),
	}
})
