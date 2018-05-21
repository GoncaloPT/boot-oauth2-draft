package pt.cgi.ams.authserver.security;

import java.util.Collections;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import pt.cgi.ams.authserver.database.User;
import pt.cgi.ams.authserver.repository.UserRepositoryAndResource;

/**
 *
 * @author silvagc
 */
@Component
public class UserService implements UserDetailsService {

    private static final Logger LOG = LoggerFactory.getLogger(UserService.class);
    private UserRepositoryAndResource repo;

    public UserService() {

    }

    @Autowired
    public UserService(UserRepositoryAndResource repo) {
        this.repo = repo;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        LOG.debug("loadUserByUsername called");
        LOG.trace("with username {} ", username);
        User user = repo.findByLogin(username);
        LOG.trace("user found {} ", user);
        if (user == null) {
            throw new UsernameNotFoundException("NOT FOUND");
        }
        return new org.springframework.security.core.userdetails.User(user.getLogin(),
                user.getPassword(), Collections.EMPTY_LIST);
    }

}
