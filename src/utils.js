import _ from 'lodash';
import Clarifai from 'clarifai';
export const getImageConcepts = function(){
    app.models.predict(Clarifai.GENERAL_MODEL, 'http://ptorigin.parenttoolkit.com/images/dmImage/ImageShare/Share_1200x900_tablefood.png').then(
        function(response) {
          console.log('response' ,response);
        },
        function(err) {
          console.error(err);
        }
      );
}