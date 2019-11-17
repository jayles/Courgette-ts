using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace MyUnitTestNamespace
{
	public class Person
	{
		public string name = "Geoff";
	}

	[TestClass]
	public class MyTestSuite
	{
		//public TestContext TestContext { get; set; }
		public Person person = null;

		[ClassInitialize]
		public static void TestFixtureSetup(TestContext context)
		{
			// runs once before all tests
		}

		[TestInitialize]
		public void Setup(/*no context param*/)
		{
			// run before each test
			person = new Person();
		}

		[TestMethod]
		public void PersonTestPass()
		{
			var person = new Person();
			Assert.AreSame(person.name, "Geoff");
			Assert.IsInstanceOfType(person, typeof(Person));
		}

		[TestMethod]
		public void PersonTestFail()
		{
			var person = new Person();
			Assert.AreEqual(person.name, "Geode");
			Assert.IsInstanceOfType(person, typeof(Person));
		}

		[DataRow("Geoff", 44)]
		[DataRow("Gemma", 48)]
		[DataRow("Harold", 52)]
		[DataTestMethod]
		public void ParameterisedTest(string name, int age)
		{
			Assert.IsTrue(name.StartsWith("G"));
			Assert.IsTrue(age > 40 && age < 60);
		}

		[TestCleanup]
		public void TearDown(/*no context param*/)
		{
			// runs after each test
		}

		[ClassCleanup]
		public static void TestFixtureTearDown(/*no context param*/)
		{
			// runs once after all tests
		}

	}
}
