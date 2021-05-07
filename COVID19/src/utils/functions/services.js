import axios from 'axios';

export default {
    signOut: async (url, bodyParameters, config) => {        
        return axios.delete( 
            url,
            bodyParameters,
            config
          ).then((res) => {
              return res.data.code;
                      }).catch((e) => {
            return e.toString();
          }); 
    },
  passRecovery: async (mail, url) => {
        return axios.post(
        url,
        {
          email: mail,
        },
        ).then((res) => {
          return res.data.code;
        }).catch((e) => {
          return e.toString();
        });
    },
  };