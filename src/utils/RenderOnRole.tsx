import PropTypes from 'prop-types'
import UserService from "../services/UserService";

type Props = {
    children: any
    roles: any
};

const RenderOnRole = ({roles, children}: Props) => (UserService.hasRole(roles)) ? children : <></>;

RenderOnRole.propTypes = {
    roles: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default RenderOnRole
