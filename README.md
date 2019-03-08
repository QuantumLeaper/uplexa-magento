# uPlexa for Magento
uPlexa Payment Gateway for Magento 2

## Dependencies
- Magento2 This can be downloaded from [magento.com](https://magento.com/) or from cloning their [GitHub repo](https://github.com/magento/magento2)
- A webserver! preferably with the latest versions of PHP and MySQL
- A uPlexa wallet and uplexa-wallet-rpc This can be downloaded from [uplexa.com](https://uplexa.com/downloads) or cloned from the [uPlexa GitHub repo](https://github.com/uplexa/uplexa)

## Install Instructions
### Install with composer
Installing with composer is the easiest way to install this plugin.
- First, add this repo to your root composer.json file. The `"repositories"` section of your root composer.json should look like this:
`"repositories": [
        {
            "type": "vcs",
            "url": "https://github.com/uplexa/uplexa-magento"
        }
    ],`
- Make sure that your `"minimum-stability"` is set to `"dev"`. It should look like this `"minimum-stability": "dev",`
- Then you can simply type `php composer require uplexaintegrations/uplexapayment`

## After Install
### Clear Cache
- Run `php bin/magento setup:upgrade`
- Flush cache with `php bin/magento cache:flush`
- Clean cache with `php bin/magento cache:clean`

### Setting-Up uplexa-wallet-rpc
- Start up your uplexa-wallet-rpc with the following command: `./uplexa-wallet-rpc --rpc-bind-port 21065 --disable-rpc-login --log-level 2 --wallet-file /path/walletfile`. It is recommended that you use the `--rpc-login` flag.

### Setup
- First, navigate to you site admin panel
-Within that admin panel, navigate to `Stores > Configuration > Sales > Payment Methods`.
- Under "Other Payment Methods" select "uPlexa Payment"
- Select "Yes" for "Enabled" and enter your uplexa-wallet-rpc address and port
