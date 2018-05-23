package pt.cgi.ams.authserver.exception;

/**
 *
 * @author silvagc
 */
public class AuthServerException extends Exception {

    public AuthServerException() {
    }

    public AuthServerException(String message) {
        super(message);
    }

    public AuthServerException(String message, Throwable cause) {
        super(message, cause);
    }

    public AuthServerException(Throwable cause) {
        super(cause);
    }

    public AuthServerException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

}
