//To add Judopay as a dependency to your current project:

//Navigate to your build.gradle file

//In the dependencies section add the latest 
com.judopay:judokit-android:{version}

//An example of how your build.gradle might look:
android {
    ...
}

dependencies {
    ...
    implementation 'com.judopay:judokit-android:2.1.1'
    ...
}
 

//Ensure the Maven Central Repository has been added:

allprojects {
    repositories {
        mavenCentral()
    }
}
