# mdns-advertise
Advertise your device with mDNS on your local network. This block talks to `Avahi` over its `DBUS` API to advertise your IP address on a `.local` domain name. Simply switch the `MDNS_TLD` environment variable to `<your_name>.local` and (hopefully) never have to lookup your IP address again!

## Usage

Here is an example of using this block in your `docker-compose.yml`. 

```
version: '2.1'
services:

  mdns-advertise:
    image: bhcr.io/gh_nucleardreamer/mdns-advertise
    restart: "always"
    privileged: true
    network_mode: host
    labels:
      io.balena.features.dbus: '1'
    environment:
      DBUS_SYSTEM_BUS_ADDRESS: 'unix:path=/host/run/dbus/system_bus_socket'
      MDNS_TLD: 'mytestdevice.local'

  # the hello container is just for testing purposes!
  hello:
    image: nginxdemos/nginx-hello:plain-text
    network_mode: host
```
