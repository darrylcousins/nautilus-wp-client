/*
 * Regular expressions for form validation
 *
 * @author Darryl Cousins <darryljcousins@gmail.com>
 *
 * Created at    :
 * Last modified :
 */
export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const nameRegex =/^[a-zA-Z .,"']+$/;
export const messageRegex =/^[A-Za-z0-9 _.,!"']+$/;
