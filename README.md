# Design Editor

## Features

- [x] Add, remove, resize, reorder, clone, copy/paste objects
- [x] Group/ungroup objects
- [x] Lock/unlock objects
- [x] Object crop support
- [x] Zoom/pan canvas
- [x] Save and Download design
- [x] Context menu
- [ ] Animation support, with Fade / Bounce / Shake / Scaling / Rotation / Flash effects
- [x] Interation modes: selection, ctrl + drag grab
- [x] Undo/Redo support
- [x] Guidelines support
- [x] Server side image rendering

## How to start

The following steps shows how to start frontend application. Navigate to `server` directory in order to see how to start it.

Start in development mode using the following commands.

```sh
# install dependencies
yarn install
# start development server
yarn start
```

Web application service will start running at `localhost:3000`

## Integrations

In order to provide rich content, the following integrations are implemented.

### Iconscout

Illusatrions and icons provider. Add credentials to `.env` file.

```sh
ICONSCOUT_CLIENT_ID="your-client-id"
ICONSCOUT_SECRET="your-secret"
```

### Pixabay

Images provider. Add credentials to `.env` file.

```sh
REACT_APP_PIXABAY_KEY="your-key"
```


## Join us on Discord

<p>
    <a href="https://discord.gg/HqyXEhkXNZ">
        <img src="https://discordapp.com/api/guilds/898955692491309126/widget.png?style=banner2" alt="Discord Banner 2"/>
    </a>
</p>

## Contribution

Feel free to contribute by opening issues with any questions, bug reports or feature requests.

## Author

Created and maintained by Dany Boza ([db@backium.co](https://twitter.com/xorbmoon)).

## License

[MIT](LICENSE)
