package pt.cgi.ams.authserver.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import pt.cgi.ams.authserver.database.User;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;

/**
 *
 * @author silvagc
 */
@RepositoryRestResource(collectionResourceRel = "user", path = "user")
@PreAuthorize("hasRole('ROLE_ADMIN'")
public interface UserRepositoryAndResource extends PagingAndSortingRepository<User, Long> {

    public User findByLogin(@Param("login") String login);
}
