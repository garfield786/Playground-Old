# Puppet Create Symlinks

Create a `symbolic link` through puppet programming code. The source path should be `/opt/itadmin` and destination path should be `/var/www/html` on all Puppet agents i.e on all `App Servers`.

Create a blank file `story.txt` under `/opt/itadmin` directory on all puppet agent nodes i.e on all `App Servers`.

``` Ruby
node 'stapp01.stratos.xfusioncorp.com', 'stapp02.stratos.xfusioncorp.com', 'stapp03.stratos.xfusioncorp.com' {
  include symlink
}
node default {}
class symlink {
    file { '/opt/data':
        ensure => link,
        target => '/var/www/html',
    }
    file { '/opt/data/media.txt':
        ensure => present,
    }
}
```

- ssh to all app servers, elevate to root and run the following command:
- `puppet agent -tv`
