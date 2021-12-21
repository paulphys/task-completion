import esbuild from 'esbuild';
import filePlugin from '@chialab/esbuild-plugin-any-file';

await esbuild.build({
    plugins: [
        filePlugin(),
    ],
});