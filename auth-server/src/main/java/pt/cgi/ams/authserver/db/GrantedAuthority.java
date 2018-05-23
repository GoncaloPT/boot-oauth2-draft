package pt.cgi.ams.authserver.db;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

/**
 *
 * @author silvagc
 */
@Entity
public class GrantedAuthority  {

    @Id
    @Column(name = "granted_authority_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long grantedAuthorityId;

    @JoinColumn(name = "user_id", referencedColumnName = "user_id", nullable = false)
    @ManyToOne(fetch = FetchType.EAGER)
    @JsonIgnore
    private User userId;

    @JoinColumn(name = "authority_id", referencedColumnName = "authority_id", nullable = false)
    @ManyToOne(fetch = FetchType.EAGER)
    private Authority authorityId;

    public Long getGrantedAuthorityId() {
        return grantedAuthorityId;
    }

    public void setGrantedAuthorityId(Long grantedAuthorityId) {
        this.grantedAuthorityId = grantedAuthorityId;
    }

    public User getUserId() {
        return userId;
    }

    public void setUserId(User userId) {
        this.userId = userId;
    }

    public Authority getAuthorityId() {
        return authorityId;
    }

    public void setAuthorityId(Authority authorityId) {
        this.authorityId = authorityId;
    }

   

}
