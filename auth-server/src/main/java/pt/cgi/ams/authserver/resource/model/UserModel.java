package pt.cgi.ams.authserver.resource.model;

import java.time.Instant;
import java.util.List;
import org.springframework.security.core.GrantedAuthority;
import pt.cgi.ams.authserver.db.User;
import static pt.cgi.ams.authserver.security.UserService.getSpringAuthorities;

/**
 *
 * @author silvagc
 */
public class UserModel {

    private Long userId;

    private String login;

    private String firstName;

    private String lastName;

    private String email;

    private boolean activated = false;

    private String langKey;

    private String imageUrl;

    private String activationKey;

    private String resetKey;

    private Instant resetDate = null;

    private List<org.springframework.security.core.GrantedAuthority> authorities;

    public List<GrantedAuthority> getAuthorities() {
        return authorities;
    }

    public void setAuthorities(List<GrantedAuthority> authorities) {
        this.authorities = authorities;
    }
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean isActivated() {
        return activated;
    }

    public void setActivated(boolean activated) {
        this.activated = activated;
    }

    public String getLangKey() {
        return langKey;
    }

    public void setLangKey(String langKey) {
        this.langKey = langKey;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getActivationKey() {
        return activationKey;
    }

    public void setActivationKey(String activationKey) {
        this.activationKey = activationKey;
    }

    public String getResetKey() {
        return resetKey;
    }

    public void setResetKey(String resetKey) {
        this.resetKey = resetKey;
    }

    public Instant getResetDate() {
        return resetDate;
    }

    public void setResetDate(Instant resetDate) {
        this.resetDate = resetDate;
    }

    public static UserModel build(User user) {
        UserModel model = new UserModel();
        model.setActivated(user.isActivated());
        model.setActivationKey(user.getActivationKey());
        model.setEmail(user.getEmail());
        model.setFirstName(user.getFirstName());
        model.setImageUrl(user.getImageUrl());
        model.setLangKey(user.getLangKey());
        model.setLastName(user.getLastName());
        model.setLogin(user.getLogin());
        model.setResetDate(user.getResetDate());
        model.setResetKey(user.getResetKey());
        model.setUserId(user.getUserId());
        return model;
    }
    public static UserModel buildWithAuthorities(User user) {
        UserModel model = new UserModel();
        model.setActivated(user.isActivated());
        model.setActivationKey(user.getActivationKey());
        model.setEmail(user.getEmail());
        model.setFirstName(user.getFirstName());
        model.setImageUrl(user.getImageUrl());
        model.setLangKey(user.getLangKey());
        model.setLastName(user.getLastName());
        model.setLogin(user.getLogin());
        model.setResetDate(user.getResetDate());
        model.setResetKey(user.getResetKey());
        model.setUserId(user.getUserId());
        model.setAuthorities(getSpringAuthorities(user));
        return model;
    }

}
