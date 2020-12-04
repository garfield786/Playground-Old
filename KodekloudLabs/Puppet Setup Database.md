# Puppet Setup Database

- create the required .pp file on the manifests location and paste in the following code:
- "Change the DB Parameters below with the correct ones"

``` Ruby
node 'stdb01.stratos.xfusioncorp.com' {
  include mysql_database
}
node default {}
class mysql_database {
  package { 'mariadb-server':
    ensure => installed,
  }
  service { 'mariadb':
    ensure => running,
    enable => true,
  }
  mysql::db { 'DB_NAME':
    user     => 'DB_USER',
    password => 'DB_PASS',
    host     => 'localhost',
    grant    => ['ALL'],
  }
}
```

- ssh to the stdb01 server, elevate to root and run the following command:
- `puppet agent -tv`
