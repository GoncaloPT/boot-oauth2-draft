package pt.cgi.ams.authserver.resource;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import pt.cgi.ams.authserver.database.User;
import pt.cgi.ams.authserver.exception.UserNotFoundException;
import pt.cgi.ams.authserver.repository.UserRepositoryAndResource;
import pt.cgi.ams.authserver.resource.model.UserModel;

/**
 * This controller goal is just to expose the "current" user in a sessionless
 * context. The auth token is used to map the desired user
 *
 * @author silvagc
 */
@Controller
public class UserForTokenController {

    private UserRepositoryAndResource repo;

    @Autowired
    public UserForTokenController(
            UserRepositoryAndResource repo) {
        this.repo = repo;
    }

    @GetMapping("user/current")
    public ResponseEntity<UserModel> getForToken(OAuth2Authentication auth) throws UserNotFoundException {
        String authUser = (String) auth.getPrincipal();
        String login = authUser;
        User user = Optional.of(repo.findByLogin(login)).orElseThrow(() -> new UserNotFoundException());
        return ResponseEntity.ok(UserModel.build(user));
    }

}
