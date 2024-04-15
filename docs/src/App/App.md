# Katalog App

Główny komponent w aplikacji.

## ThemeProvider

Pierwszy w nim wrapper to ThemeProvider pozwalający odnosić się do theme
w komponentach stylowych. Przykładowo dzięki takiemu zapisowi;

```js
color: ${({ theme, color }) => (color ? color : theme.colors.dark)};
```

gdy podamy propsa color - wczyta nam się określony w propsie kolor, natomiast domyślnie bez podanego
propsa wczyta się zdefiniowany kolor czarny w *theme.colors.dark*.

## BrowserRouter

Komponent z biblioteki react'a obsługujący routing.

## PopUpMessageManager

Komponent obsługujący pojawiające się popUpy. Np. można z każdego miejsca wywołać;
```js
        dispatch(
          popUpMessageHandler({
            header: 'Log in error',
            message: `Error: ${loginResult.detail}`,
            borderColor: theme.colors.red,
          })
        );
```
Co wyświetli popUpa informacyjnego o jakimś błędzie.

## NavBar

Komponent NavBar używany w każdym miejscu w aplikacji. 

## LoggedBar

Komponent wysuwającego się menu z prawej strony, gdy użytkownik jest zalogowany.

## RoutingManager

Tutaj określone są wszystkie strony aplikacji. Ich ścieżki, komponenty (znajdujące się w *pages*) oraz dostęp.