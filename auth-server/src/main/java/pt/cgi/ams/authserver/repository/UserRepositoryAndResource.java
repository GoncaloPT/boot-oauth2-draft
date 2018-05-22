package pt.cgi.ams.authserver.repository;

import java.util.UUID;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import pt.cgi.ams.authserver.database.User;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 *
 * @author silvagc
 */
@RepositoryRestResource(collectionResourceRel = "user", path = "user")
public interface UserRepositoryAndResource extends PagingAndSortingRepository<User, UUID> {

    public User findByLogin(@Param("login") String login);
    
}
