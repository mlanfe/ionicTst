package io.ionic.starter;

import android.os.Bundle;
import android.os.PersistableBundle;

import androidx.annotation.Nullable;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {


  @Override
  public void onCreate(Bundle savedInstanceState) {
    registerPlugin(EchoPlugin.class);
    super.onCreate(savedInstanceState);
  }
}
