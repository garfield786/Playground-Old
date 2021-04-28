# Puppet Install Package

- create the required .pp file on the manifests location and paste in the following code:

``` Ruby
node 'stapp01.stratos.xfusioncorp.com', 'stapp02.stratos.xfusioncorp.com', 'stapp03.stratos.xfusioncorp.com' {
  include nginx
}
node default {}
class nginx {
  package { 'nginx':
    ensure => present,
  }
}
```
