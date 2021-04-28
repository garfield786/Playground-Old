# Puppet Install Group Package

- create the required .pp file on the manifests location and paste in the following code:

``` Ruby
node 'stapp01.stratos.xfusioncorp.com', 'stapp02.stratos.xfusioncorp.com', 'stapp03.stratos.xfusioncorp.com' {
  include yum_group
}
node default {}
class yum_group {
  yum::group { 'Fedora Packager':
    ensure => present,
  }
}
```

- To Install Run this on Agent:
puppet agent -tv

- Run this command to install puppet-yum on Master
puppet module install puppet-yum

- To check, Run this on Agents:
yum groups list
