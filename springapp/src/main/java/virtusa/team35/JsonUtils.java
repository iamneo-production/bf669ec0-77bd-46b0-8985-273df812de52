package virtusa.team35;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class JsonUtils {
	
	 private static ObjectMapper mapper = new ObjectMapper();
		
	 public static <T> String toJson(T obj) {
	  try {
	   return mapper.writeValueAsString(obj);
	  } catch (JsonProcessingException e) {
	   return null;
	  }
	 }

	}
