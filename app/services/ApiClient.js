/**
 * ApiClient est un service
 * C'est à dire un morceau de code qui est accessible partout dans l'application et qui est dédié à un périmètre (un emsemble d'action cohérent) donné
 * => ici, faire des appels à l'API
 */

// importe le code nécessaire au fonctionnement de ce service
import axios from 'axios';

// définir l'url de base de l'api
const baseUrl = 'http://http://localhost/StMichel//wp-json';

// avec export default {unobjet}, on rend {unobjet} "importable"
export default {
  // cette méthode get sert de "relais" pour la méthode get() d'axios
  get: function(path) {
    // axios.get() me renvoit une Promise
    // on la renvoit directement, la méthode get renvoit donc la même promise qu'axios
    // en argument, on construit l'url complète en concaténant baseUrl et path
    return axios.get(baseUrl + path);
  },
  post: function(path, data) {
    const token = localStorage.getItem('user-token');
    // dans cet objet on définit les headers à passer sous la forme
    // clé = nom du header (respect de la casse)
    // valeur = valeur du header
    const headers = {
      Authorization: 'Bearer ' + token,
    }

    return axios.post(
      baseUrl + path,
      data,
      // on passe un objet d'options
      {
        headers // équivalent à headers: headers
      }
    );
  }
}
