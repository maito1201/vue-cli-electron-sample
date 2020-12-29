module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        win: {
          icon: 'src/assets/icon.png',
          target: [
            {
              target: 'portable', // 'zip', 'nsis', 'portable'
              arch: ['x64'], // 'x64', 'ia32'
            },
          ],
        },
      }
    }
  }
}
