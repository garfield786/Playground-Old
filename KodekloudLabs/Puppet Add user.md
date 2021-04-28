# Puppet add user

```Ruby
node 'stapp01.stratos.xfusioncorp.com', 'stapp02.stratos.xfusioncorp.com', 'stapp03.stratos.xfusioncorp.com' {
  include add_user
}
node default {}
class add_user {
    user { 'james':
        ensure => 'present',
        uid => '1615',
    }
}
```

- ssh to all app servers, elevate to root and run the following command:
- `puppet agent -tv`
